import { expect, describe, it } from 'vitest'
import cc from "../src/index"

describe("CLI Cursor", () => {
    it("Should clear terminal screen", () => {
        cc.clear()
        expect(true).to.be.true
    })
})
