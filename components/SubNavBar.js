import Link from 'next/link'
import React from 'react'

function SubNavBar(props) {
  return (
    <div>
      <div className="h-8 mt-4 border-b-2 border-gray-100 flex justify-between lg:justify-start">
        <div className={props.selectedTab == "projects" ? "sub-nav-item sub-nav-selected": "sub-nav-item"}>
            <div className="text-center">
                <Link href="/homepage">
                    <a>
                        Projects
                    </a>
                </Link>
            </div>
        </div>
        <div className={props.selectedTab == "quicktasks" ? "sub-nav-item sub-nav-selected": "sub-nav-item"}>
            <div className="text-center">
                <Link href="/quicktasks">
                    <a>
                        Quick Tasks
                    </a>
                </Link>
            </div>
        </div>
        <div className={props.selectedTab == "categories" ? "sub-nav-item sub-nav-selected": "sub-nav-item"}>
            <div className="text-center">
                <Link href="/categories">
                    <a>
                        Categories
                    </a>
                </Link>
            </div>
        </div>
        <div className={props.selectedTab == "chats" ? "sub-nav-item sub-nav-selected": "sub-nav-item"}>
            <div className="text-center">
                <Link href="/chats">
                    <a>
                        Chats
                    </a>
                </Link>
            </div>
        </div>
        <div className={props.selectedTab == "users" ? "sub-nav-item sub-nav-selected": "sub-nav-item"}>
            <div className="text-center">
                <Link href="/users">
                    <a>
                        Users
                    </a>
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SubNavBar
