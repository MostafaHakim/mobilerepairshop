import { Component } from "react";

class SidebarPopUpMenu extends Component{
    render(){
        return(
            <div className="transition-all duration-700 absolute left-[110%] top-0 w-[780px] py-0 group-hover:py-8 overflow-hidden h-0 group-hover:text-gray-900 group-hover:h-auto bg-white flex flex-row items-center justify-around space-x-2 rounded-md shadow-xl">
                <div className="flex flex-col space-y-1 divide-y-2 transition-all duration-700 h-0 group-hover:h-auto">
                    <div>
                        <h2>Model 1</h2>
                    </div>
                    <div className="flex flex-col space-y-1 divide-y-2 ">
                        <h2>Model 1.1</h2>
                        <h2>Model 1.2</h2>
                        <h2>Model 1.3</h2>
                        <h2>Model 1.4</h2>
                        <h2>Model 1.5</h2>
                    </div>
                </div>
                <div className="flex flex-col space-y-1 divide-y-2">
                <div>
                        <h2>Model 2</h2>
                    </div>
                    <div className="flex flex-col space-y-1 divide-y-2">
                        <h2>Model 2.1</h2>
                        <h2>Model 2.2</h2>
                        <h2>Model 2.3</h2>
                        <h2>Model 2.4</h2>
                        <h2>Model 2.5</h2>
                    </div>
                </div>
                <div className="flex flex-col space-y-1 divide-y-2">
                <div>
                        <h2>Model 3</h2>
                    </div>
                    <div className="flex flex-col space-y-1 divide-y-2">
                        <h2>Model 3.1</h2>
                        <h2>Model 3.2</h2>
                        <h2>Model 3.3</h2>
                        <h2>Model 3.4</h2>
                        <h2>Model 3.5</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default SidebarPopUpMenu