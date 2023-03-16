import React from 'react'

const LeftNavMenultem = ({text, icon, className, action}) => {
  return (
    <div className={"text-white text-sm cursor-pointer h-10 flex items-center px-4 mb-[1px] rounded-lg hover:bg-white/[0.15] "+
    className}
    onClick={action}
     >
      <span className="text-xl px-4 mr-5">{icon}</span>
      {text} 
    </div>
  )
}

export default LeftNavMenultem
