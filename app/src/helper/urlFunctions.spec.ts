import { Chance } from "chance"
import { generateShortenedUrl, getShortendCodeUrl } from "./urlFunctions"

const chance = new Chance()
const url = chance.url()
let code = ""

describe("Testing helper functions", () => {
  it("Testing generateShortenedCode function", async () => {
    code = await generateShortenedUrl(url, "localhost:3000")
    expect(typeof code).toBe("string")
  })

  it("Testing getShortendCodeUrl function", async () => {
    const fetchedUrl = await getShortendCodeUrl(code)
    expect(typeof url).toBe("string")
    expect(fetchedUrl).toBe(url)
  })
})
