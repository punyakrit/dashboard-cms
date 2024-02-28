function Footer() {
    return (
      <footer className="bg-gray-800 text-white bottom-0 fixed w-screen">
        <div className="container mx-auto py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-xl font-bold">Footer Title</h2>
              <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="text-center md:text-right">
              <a href="#" className="text-gray-400 hover:text-white px-3">Link 1</a>
              <a href="#" className="text-gray-400 hover:text-white px-3">Link 2</a>
              <a href="#" className="text-gray-400 hover:text-white px-3">Link 3</a>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer;
  