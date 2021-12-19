import {
    assertEquals,
    assertStringIncludes
} from "https://deno.land/std@0.118.0/testing/asserts.ts";
import { config } from "./config/index.ts"

Deno.test('#port, should equal 8000' , () => {
    const targetPortNumber = 8000;
    assertEquals(config.port, targetPortNumber)
})

Deno.test({
    name: '#response, should contain JS',
    fn: () => {
        assertStringIncludes(config.response, 'JS');
    },
    ignore: false,
    only: false
})
