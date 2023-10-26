const Header = () => {
  return (
    <header className="px-3 text-white flex justify-between items-center h-[10vh] bg-[#007791]">
      <h1>Past<span>PEPS</span></h1>
      <nav className="">
        <ul className="flex gap-3">
          <li>Home</li>
          <li>Upload paper</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header