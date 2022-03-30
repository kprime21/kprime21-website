import BlogPost from '../../components/BlogPost'
import { createClient } from '../../prismicio' //Builds API to grab from CMS
//Used to generate a dynamic page of a blogpost


//Load the blog contnet dynamically
function Page({page}) {
   
    return (
        <BlogPost article = {page} />
    )
}
export default Page

export async function getStaticPaths({BlogPosts}) {//get all paths from CMS
    //
    const client = createClient({ BlogPosts })

    const page = await client.getAllByType('blogpost');

    let paths = []

    page.map(link => paths.push(`/blog/${link.uid}`))

   

    return {
        paths, fallback: false
    }
}


export async function getStaticProps({BlogPosts, params}){//get specific blog post by it's slug (UID)
    const client = createClient({ BlogPosts })


    const page = await client.getByUID('blogpost', params.slug);
  

    return {
        props: {
        page}
    }
}
