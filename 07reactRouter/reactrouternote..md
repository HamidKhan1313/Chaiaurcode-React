export default function Header(){
return(
    <header className = "shadow sticky z-50 top-0">
    <nav className = "bg-white border-gray-200 px-4  lg:px-6 py-2.5">
    <div className = "flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    <link to="/" className = "flex items-center">
    <img  src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" 
    className = "mr-3 h-12" alt = "logo"  />
    </link>
    <div className = "flex  items-center lg:order-2">
    <link  to="#"
    className = "text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded" 
>
    log in

    </link>
 <link  to="#"
    className = "text-white bg-orange-700 hover:bg-orange-800 focus-ring-4
     focus:ring-orange-300 font-medium rounded" 
>
    log in

    </link>
)

}