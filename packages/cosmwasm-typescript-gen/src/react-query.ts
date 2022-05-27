import { pascal } from "case";
import { header } from './header';
import { join } from "path";
import { sync as mkdirp } from "mkdirp";
import * as w from 'wasm-ast-types';
import * as t from '@babel/types';
import { writeFileSync } from 'fs';
import generate from "@babel/generator";
import { compile } from 'json-schema-to-typescript';

import { parser } from "./parse";

export default async (name: string, schemas: any[], outPath: string) => {

    const RecoilFile = pascal(`${name}Contract`) + '.react-query.ts';
    const Contract = pascal(`${name}Contract`) + '.ts';

    const QueryMsg = schemas.find(schema => schema.title === 'QueryMsg');
    const Types = schemas.filter(schema => schema.title !== 'ExecuteMsg' && schema.title !== 'ExecuteMsg_for_Empty' && schema.title !== 'QueryMsg');

    let QueryClient = null;
    let ReadOnlyInstance = null;

    const body = [];

    body.push(
        w.importStmt(['useQuery', 'UseQueryOptions'], 'react-query')
    );

    // TYPES
    const allTypes = [];
    for (const typ in Types) {
        const result = await compile(Types[typ], typ);
        allTypes.push(result);
    }
    const typeHash = parser(allTypes);
    body.push(
        w.importStmt(Object.keys(typeHash), `./${Contract}`.replace(/\.ts$/, ''))
    );

    // query messages
    if (QueryMsg) {

        QueryClient = pascal(`${name}QueryClient`);
        ReadOnlyInstance = pascal(`${name}ReadOnlyInterface`);

        body.push(
            w.importStmt([QueryClient], `./${Contract}`)
        );

        [].push.apply(body,
            w.createReactQueryHooks(
                QueryMsg,
                name,
                QueryClient
            )
        );

    }

    const code = header + generate(
        t.program(body)
    ).code;

    mkdirp(outPath);
    writeFileSync(join(outPath, RecoilFile), code);
};