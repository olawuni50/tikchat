import { CommentIcon } from '@sanity/icons'
export default {
    name:'comment',
    title:'Comment',
    type:'document',
    icon: CommentIcon,
    fields: [
        {
            name:'postedBy',
            title:'Posted By',
            type:'postedBy'
        },

        {
            name:'comment',
            title:'Comment',
            type:'string'
        }
    ]
}