import { Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ComponentsPage from './pages/ComponentsPage'
import LayoutsPage from './pages/LayoutsPage'
import PalettesPage from './pages/PalettesPage'
import PlaygroundPage from './pages/PlaygroundPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="components" element={<ComponentsPage />} />
        <Route path="layouts" element={<LayoutsPage />} />
        <Route path="palettes" element={<PalettesPage />} />
        <Route path="playground" element={<PlaygroundPage />} />
      </Route>
    </Routes>
  )
}
