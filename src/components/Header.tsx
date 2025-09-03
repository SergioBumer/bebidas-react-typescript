import { useMemo } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
export default function Header () {
  const { pathname } = useLocation()
  console.log(pathname)

  const isHome = useMemo(() => pathname == '/', [pathname])
  console.log(isHome)

  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
      <div className='mx-auto container px-5 py-16 '>
        <div className='flex justify-between items-center'>
          <div className=''>
            <img className='w-32' src='/logo.svg' alt='Logotipo' />
          </div>
          <nav className='flex gap-4'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to='/favorites'
              className={({ isActive }) =>
                isActive
                  ? 'text-orange-500 uppercase font-bold'
                  : 'text-white uppercase font-bold'
              }
            >
              Favoritos
            </NavLink>
          </nav>
        </div>
        {isHome && (
          <form action='' className='md:w-1/2 2xl:w-1/ bg-orange-400 p-10 my-32 rounded-lg shadow space-y-6'>
            <div className='space-y-4'>
              <label
                htmlFor='ingredient'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Nombre o Ingrediente
              </label>
              <input
                className='p-3 w-full rounded-lg focus:outline-none'
                type='text'
                name='ingredient'
                id='ingredient'
                placeholder='Nombre o Ingrediente. Ej. Vodka, Ron, etc.'
              />
            </div>

            <div className='space-y-4'>
              <label
                htmlFor='category'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Categoría
              </label>
              <select name="category" id="category" className='p-3 w-full rounded-lg focus:outline-none'>
                <option value="">-- Seleccione --</option>
              </select>
            </div>

            <input type="submit" value="Buscar" className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase font-extrabold w-full p-2 rounded-lg' />
          </form>
        )}
      </div>
    </header>
  )
}
