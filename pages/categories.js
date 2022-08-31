import Head from 'next/head'
import Image from 'next/image'
import AddCategoryModal from '../components/AddCategoryModal'
import Category from '../components/Category'
import Header from '../components/Header'
import SubNavBar from '../components/SubNavBar'
import Task from '../components/Task'
import TaskColumn from '../components/TaskColumn'

export default function categories() {
  return (
    <div className="bg-default">
      <Head>
        <title>Task Management | Admin</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      {/* Tasks */}
      <div className='px-4 sm:px-6 md:px-8 lg:px-10 min-h-[75vh] lg:min-h-[85vh]'>
        <h1 className="text-3xl font-bold mt-11">Add/Edit Categories</h1>
        <SubNavBar selectedTab="categories" />
        <div className="bg-blue-50 mt-5 pt-6 px-4 rounded-xl min-h-[60vh] lg:min-h-[65vh]">
            <div className="flex justify-between">
                <h1 className='font-medium'>
                    Categories
                </h1>
                <AddCategoryModal />
            </div>
            <div className="flex flex-col lg:flex-row lg:space-y-0 pt-8 space-y-4 lg:space-x-6 pb-10">
                <Category name="Web Development" />
                <Category name="Web Development" />
                <Category name="Web Development" />
            </div>
        </div>
      </div>
    </div>
  )
}