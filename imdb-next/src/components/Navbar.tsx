import NavBarItems from "./NavBarItems";


export default function Navbar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg justify-center gap-6 ">
        <NavBarItems title="Trending" param="fetchTrending" />
        <NavBarItems title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
