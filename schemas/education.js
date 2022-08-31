export default{
    name:'education',
    title:'Education',
    type: 'document',
    fields:[
        {
            name:'year',
            title:'Year',
            type:'string'
        },
        {
            name:'works',
            title:'Works',
            type:'array',
            of:[{ type:'educationExp'}]
        },
    ]
}