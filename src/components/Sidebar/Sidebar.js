import {useRef, useState} from "react"
import {Link} from 'react-router-dom';
import {GrMenu} from "react-icons/gr";
import {Image} from "../Image/Image";
import {routes} from "../../routes";

export const Sidebar = () => {

    const [isOpen, setIsOpen] = useState(true);

    const toggleState = () => {
        setIsOpen(!isOpen);
    }

    const collapsableItems = useRef({})

    function toggleCollapsableItems(refName) {
        collapsableItems.current[refName].style.transition = "max-height 0.2s ease-out 0.2s"
        if (!collapsableItems.current[refName].style.maxHeight || collapsableItems.current[refName].style.maxHeight === '0px') {
            collapsableItems.current[refName].style.maxHeight = '100%';
        } else {
            collapsableItems.current[refName].style.maxHeight = "0"
        }
    }

    return (
        <>
            <div
                className={`hidden lg:flex flex-col items-center relative bg-blue-200 h-screen ${isOpen ? "lg:w-3/12 xl:w-2/12" : "w-16"}`}/>
            <div
                className={`hidden lg:flex lg:fixed flex-col items-center relative bg-blue-200 shadow-lg h-screen transition-all z-50 ${isOpen ? "lg:w-3/12 xl:w-2/12" : "w-16"}`}>
                <div
                    className={`${isOpen ? "block" : "hidden"} absolute -right-5 top-10 bg-blue-300 p-2.5 rounded cursor-pointer`}
                    onClick={toggleState}
                >
                    <GrMenu className="text-2xl font-bold"/>
                </div>
                <div className="pt-5 h-full w-full flex justify-center w-full flex-col gap-10">
                    {
                        isOpen ? (
                            <Image
                                src="/assets/Logo Square BG White-01.png"
                                className="self-center rounded-full h-16 w-16 lg:h-20 xl:w-24 xl:h-24"
                            />
                        ) : (
                            <GrMenu
                                className="font-bold block text-2xl cursor-pointer mx-auto"
                                onClick={toggleState}
                            />
                        )
                    }
                    <div className={`${isOpen ? "" : "justify-center gap-10"} flex flex-col flex-1`}>
                        {
                            routes.map(({link, name, children, icon: Icon, collapsable}) => (
                                <div
                                    key={name}
                                    className={`${isOpen ? "py-3 hover:bg-blue-100" : "py-1"} flex flex-col px-5 transition-all	duration-700 cursor-pointer`}
                                >
                                    {link ? <Link
                                        to={link}
                                        className="flex gap-5 items-center"
                                    >
                                        <Icon className="text-xl"/>
                                        <h1 className={`${isOpen ? "block" : "hidden"} text-blue-900 font-bold text-xl`}>{name}</h1>
                                    </Link> : <div className="flex gap-5 items-center"
                                                   onClick={() => toggleCollapsableItems(name)}>
                                        <Icon className="text-xl"/>
                                        <h1 className={`${isOpen ? "block" : "hidden"} text-blue-900 font-bold text-xl`}>{name}</h1>
                                    </div>}
                                    <div
                                        className={`${isOpen ? "flex flex-col ml-10" : "hidden"} ${collapsable ? "max-h-0" : "max-h-full"} overflow-hidden h-auto`}
                                        ref={collapsable ? ref => collapsableItems.current[name] = ref : null}>
                                        {
                                            children && (
                                                <>
                                                    {
                                                        children.map(({link, name}) => (
                                                            <Link
                                                                key={`${link}_child`}
                                                                to={link}
                                                                className="rounded py-1 px-2 transition-all	duration-700 hover:bg-blue-700 hover:text-white"
                                                            >
                                                                {name}
                                                            </Link>
                                                        ))
                                                    }
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
