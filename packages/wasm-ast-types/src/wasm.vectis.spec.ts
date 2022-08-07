import generate from '@babel/generator';
import cosmos_msg_for__empty from './../../../__fixtures__/vectis/govec/cosmos_msg_for__empty.json';
import execute_msg_for__empty from './../../../__fixtures__/vectis/govec/execute_msg_for__empty.json';
import can_execute_relay_response from './../../../__fixtures__/vectis/govec/can_execute_relay_response.json';
import info_response from './../../../__fixtures__/vectis/govec/info_response.json';
import relay_transaction from './../../../__fixtures__/vectis/govec/relay_transaction.json';

import {
    createQueryClass,
    createExecuteClass,
    createExecuteInterface,
    createTypeInterface
} from './wasm'
import { RenderContext } from './utils/types';

const expectCode = (ast) => {
    expect(
        generate(ast).code
    ).toMatchSnapshot();
}

const printCode = (ast) => {
    console.log(
        generate(ast).code
    );
}

it('cosmos_msg_for__empty', () => {
    const ctx = new RenderContext(cosmos_msg_for__empty);
    expectCode(createTypeInterface(
        ctx,
        cosmos_msg_for__empty
    ))
});

it('execute_msg_for__empty', () => {
    const ctx = new RenderContext(execute_msg_for__empty);
    expectCode(createTypeInterface(
        ctx,
        execute_msg_for__empty
    ))
})

it('can_execute_relay_response', () => {
    const ctx = new RenderContext(can_execute_relay_response);
    expectCode(createTypeInterface(
        ctx,
        can_execute_relay_response
    ))
})

it('info_response', () => {
    const ctx = new RenderContext(info_response);
    expectCode(createTypeInterface(
        ctx,
        info_response
    ))
})

it('relay_transaction', () => {
    const ctx = new RenderContext(relay_transaction);
    expectCode(createTypeInterface(
        ctx,
        relay_transaction
    ))
})


it('query classes', () => {
    const ctx = new RenderContext(cosmos_msg_for__empty);
    expectCode(createQueryClass(
        ctx,
        'SG721QueryClient',
        'SG721ReadOnlyInstance',
        cosmos_msg_for__empty
    ))
});

it('query classes', () => {
    const ctx = new RenderContext(execute_msg_for__empty);
    expectCode(createQueryClass(
        ctx,
        'SG721QueryClient',
        'SG721ReadOnlyInstance',
        execute_msg_for__empty
    ))
});

it('execute classes array types', () => {
    const ctx = new RenderContext(execute_msg_for__empty);
    expectCode(createExecuteClass(
        ctx,
        'SG721Client',
        'SG721Instance',
        null,
        execute_msg_for__empty
    ))
});

it('execute interfaces no extends', () => {
    const ctx = new RenderContext(execute_msg_for__empty);
    expectCode(createExecuteInterface(
        ctx,
        'SG721Instance',
        null,
        execute_msg_for__empty
    ))
});
