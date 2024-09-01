import Sidebar from "../ui/sidebar/Sidebar"


export const metadata = {
    title: 'LitBook -- Buy or Rent Books',
    description: 'An online book store'
}

export default function BookStoreLayout({children}) {
  return (
    <div className='flex xs:flex-col sm:flex-col md:flex-row xl:flex-row'>
        <div className='flex flex-wrap p-2 justify-center'>
            <Sidebar/>
            {children}
        </div>
    </div>
  )
}
