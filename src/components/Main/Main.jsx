import React from 'react'
import logoNCC from '../../assets/image/logoNCC.png'
import logoHTML from '../../assets/image/logoHTML.png'
import logoCSS from '../../assets/image/logoCSS.png'
import logoURL from '../../assets/image/logoURL.png'
import '../Main/Main.css'

export const Main = () => {
    return (
        <div className='container'>
            <div className='logo'>
                <img src={logoNCC} alt="" />
            </div>
            <div className='desc'>
                <h1>Lorem ipsum dolor sit asmet?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
            </div>
            <div className='box'>
                <div className='box_item'>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <img src={logoHTML} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
                <div className='box_item'>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <img src={logoCSS} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>
                <div className='box_item'>
                    <h2>Lorem ipsum dolor sit amet</h2>
                    <img src={logoURL} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</p>
                </div>

            </div>
        </div>
    )
}
