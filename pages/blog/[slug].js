import BlogPost from '../../components/BlogPost'
//Used to generate a dynamic page of a blogpost

const blogs = [
    { a: '1', slug: 'website' }
]

function Page(props) {
    return (
        <BlogPost />
    )
}
export default Page

export async function getStaticPaths() {
    let paths = [{ params: { slug: blogs[0].slug } }]

    return {
        paths, fallback: false
    }
}


export const getStaticProps = () => ({
    props: {
        hello: blogs[0]
    }
})
