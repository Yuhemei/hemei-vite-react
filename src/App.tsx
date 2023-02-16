import ViteReactDemo from './screens/ViteReactDemo'
import { Game as SquireGame } from './screens/SquireGame'
import { FilterableProductTable } from './screens/Philosphy'//商店组件
function App() {
    return (
        <div>
            <ViteReactDemo />
            <SquireGame></SquireGame>
            <FilterableProductTable></FilterableProductTable>
        </div>
    )
}

export default App
