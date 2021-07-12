const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

// type Props= {
//     contentTypeName:string
// }

export async function fetchEntries(contentTypeName) {

  const contentType = await client.getEntry(contentTypeName)
  if(contentType.fields) return contentType
}

export default { fetchEntries }
