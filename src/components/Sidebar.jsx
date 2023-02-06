import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiBugcrowd } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from "../data/dummy";
import { itemsToOrder } from "@syncfusion/ej2/treemap";

const Sidebar = () => {

    const activeMenu = true;
    const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
    const normalLink = `flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg 
    text-md text-grey-700 dark:text-grey-200 dark:hover text-black hover:bg-light-grey m-2`

    return (
        <div className="ml-3 h-screen
         md:overflow-hidden overflow-auto
          md:hover:overflow-auto pb-10">
            {activeMenu && (
            <>
                <div className="flex justify-between items-center" >
                    <Link to="/" onClick={() => {}} className="item-center gap-3 ml-3 mt-4
                     flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
                        <SiBugcrowd className="text-2xl"/><span>BoldShop</span>
                    </Link>
                    <TooltipComponent content="Menu" position="BottomCenter">
                        <button type="button"
                        onClick={() => {}}
                        className="text-xl rounded-full p-3 
                        hover:bg-light-grey mt-4 block md:hidden"
                        >
                            <MdOutlineCancel/>
                        </button>
                    </TooltipComponent>
                </div>
                <div className="mt-1000">
                    {links.map((item) => (
                        <div key={item.title}>
                            <p className="text-gray-400 m-3 mt-4 uppercase">
                                {item.title}
                            </p>  
                            {item.links.map((link) => (
                                <NavLink
                                to={`/${link.name}`}
                                key={link.name}
                                onClick={() => {

                                }}
                                className={({ isActive }) => isActive ? activeLink : normalLink}
                                >
                                    {link.icon}
                                    <span className="capitalize">
                                        {link.name}
                                    </span>
                                </NavLink>
                            ))}
                        </div>
                    ))}
                </div>
            </>
            )}
        </div>
    )
}

export default Sidebar;