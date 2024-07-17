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
            }
        ]
    }
};

export default nextConfig;
