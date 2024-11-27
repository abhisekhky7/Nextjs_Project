/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        my_key:process.env.my_key
    },
    images:{
        remotePatterns:[
            {
                protocol:"https",
                hostname:"*.google.com"
            },
            {
                protocol:"https",
                hostname:"*.googleusercontent.com"
            },{
                protocol:"https",
                hostname:"cdn.britannica.com",
            }
        ]
    }
};

export default nextConfig;
