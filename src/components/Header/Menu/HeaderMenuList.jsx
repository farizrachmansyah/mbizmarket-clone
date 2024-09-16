// import React from 'react'

const HeaderMenuList = ({ category, option }) => {
  return (
    <div className="py-2">
      {category && <p className="px-4 py-2 text-sm font-bold">{category}</p>}
      <ul>
        <li>
          {option.map((item, i) => (
            <a href={item.link} key={i} className="block px-4 py-2 text-sm">
              <span className="block my-1">{item.title}</span>
            </a>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenuList;
