export default {
    name: 'postedBy',
    title:'Posted By',
    // connected to different document or schemas
    type: 'reference',
    to: [{type: 'user'}]
}