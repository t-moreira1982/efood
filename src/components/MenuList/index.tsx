import MenuComponents from '../../models/MenuComponents'
import Menu from '../Menu'
import { List } from './styles'

export type Props = {
  menus: MenuComponents[]
}

const MenuList = ({ menus }: Props) => (
  <section>
    <div className="container">
      <List>
        {menus.map((menu) => (
          <Menu
            key={menu.id}
            description={menu.description}
            image={menu.image}
            title={menu.title}
          />
        ))}
      </List>
    </div>
  </section>
)

export default MenuList
