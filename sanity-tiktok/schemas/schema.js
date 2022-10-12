
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from "./user.js"
import comment from "./comment.tsx"
import postedBy from "./postedBy.js"
import post from "./post.js"

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  
  name: 'default',
  
  types: schemaTypes.concat([
    user, postedBy, comment, post
    
    
  ]),
})
