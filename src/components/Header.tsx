import { useEffect, useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAppStore } from '../stores/useAppStore'
export default function Header() {
  const { pathname } = useLocation()
  //console.log(pathname)

  const isHome = useMemo(() => pathname == '/', [pathname])

  const fetchCategories = useAppStore(state => state.fetchCategories)
  const categories = useAppStore(state => state.categories)
  const searchRecipes = useAppStore(state => state.searchRecipes)
  const recipes = useAppStore(state => state.recipes)

  useEffect(() => {
    console.log(recipes);
    
  }, [recipes])
  const [searchFilters, setSearchFilters] = useState({ ingredient: '', category: '' })

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(Object.values(searchFilters).includes('')) {
      console.log(searchFilters);
      return
      
    }
    //Consultar recetas
    searchRecipes(searchFilters)
  }

  return (
    <header className={isHome ? "bg-[url('/bg.jpg')] bg-center bg-cover" : 'bg-slate-800'}>
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
          <form action='' className='md:w-1/2 2xl:w-1/ bg-orange-400 p-10 my-32 rounded-lg shadow space-y-6' onSubmit={handleSubmit}>
            <div className='space-y-4'>
              <label
                htmlFor='ingredient'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Nombre o Ingrediente
              </label>
              <input
                className='p-3 w-full rounded-lg focus:outline-none bg-gray-300'
                type='text'
                name='ingredient'
                id='ingredient'
                placeholder='Nombre o Ingrediente. Ej. Vodka, Ron, etc.'
                onChange={handleChange}
                value={searchFilters.ingredient}
              />
            </div>

            <div className='space-y-4'>
              <label
                htmlFor='category'
                className='block text-white uppercase font-extrabold text-lg'
              >
                Categoría
              </label>
              <select onChange={handleChange} name="category" id="category" className='p-3 w-full rounded-lg focus:outline-none bg-gray-300'>
                <option value="">-- Seleccione --</option>
                {categories?.drinks.map(category => (
                  <option key={category.strCategory} value={category.strCategory}>{category.strCategory}</option>
                ))}
              </select>
            </div>

            <input type="submit" value="Buscar" className='cursor-pointer bg-orange-800 hover:bg-orange-900 text-white uppercase font-extrabold w-full p-2 rounded-lg' />
          </form>
        )}
      </div>
    </header>
  )
}
