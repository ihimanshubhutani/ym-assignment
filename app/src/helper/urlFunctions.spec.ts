import { Chance } from "chance"
import { generateShortenedCode, getShortendCodeUrl } from "./urlFunctions"

const chance = new Chance()
const url = chance.url()
let code = ""

describe("Testing helper functions", () => {
  it("Testing generateShortenedCode function", async () => {
    code = await generateShortenedCode(url)
    expect(typeof code).toBe("string")
    expect(code.length).toBeLessThan(url.length)
  })

  it("Testing getShortendCodeUrl function", async () => {
    const fetchedUrl = await getShortendCodeUrl(code)
    expect(typeof url).toBe("string")
    expect(fetchedUrl).toBe(url)
  })
})
