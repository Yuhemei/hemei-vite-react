import React from 'react';

// 组件
// 顶部SearchBar
function SearchBar(props) {
    // name label value
    const filterText = props.filterText
    const inStrokeOnly = props.inStrokeOnly
    function handleFilterTextChange(e) {
        props.onFilterTextChange(e.target.value)
    }
    function handleInStrokeOnlyChange(e) {
        props.onInStrokeOnlyChange(e.target.checked)
    }
    return (
        <form>
            <input
                type="text"
                placeholder="Search..."
                value={filterText}
                onChange={handleFilterTextChange}
            />
            <p>
                <input
                    type="checkbox"
                    checked={inStrokeOnly}
                    onChange={handleInStrokeOnlyChange}
                />
                {''}
                Only show products in stock
            </p>
        </form>
    )
};
// 类名
function CategoryRow(props) {
    return (
        <tr>
            <th colSpan="2">{props.cate}</th>
        </tr>
    )
};

// 价目表的一行
function ProductRow(props) {
    const product = props.product
    const name = product.stocked ?
        product.name :
        <span style={{ color: 'red' }}>{product.name}</span>
    return (
        <tr>
            <td>
                {name}
            </td>
            <td>{product.price}</td>
        </tr>
    )
};
class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStrokeOnly = this.props.inStrokeOnly

        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) == -1) {
                return;
            }
            if (inStrokeOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <CategoryRow
                        cate={product.category}
                        key={product.category} />
                )
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name} />
            )
            lastCategory = product.category;
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        )

    }
}
// 拆分后的整体
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStrokeOnly: false
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStrokeOnlyChange = this.handleInStrokeOnlyChange.bind(this)
    }
    handleFilterTextChange(filterText) {
        this.setState({ filterText: filterText })
    }
    handleInStrokeOnlyChange(inStrokeOnly) {
        this.setState({ inStrokeOnly: inStrokeOnly })
    }
    render() {
        const PRODUCTS = [
            { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
            { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
            { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
            { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
            { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
            { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
        ]
        return (
            <div className='page'>
                <SearchBar
                    filterText={this.state.filterText}
                    inStrokeOnly={this.state.inStrokeOnly}
                    onFilterTextChange={this.handleFilterTextChange}
                    onInStrokeOnlyChange={this.handleInStrokeOnlyChange}
                />
                <ProductTable
                    products={PRODUCTS}
                    filterText={this.state.filterText}
                    inStrokeOnly={this.state.inStrokeOnly}
                />
            </div>
        )
    }
}

export { FilterableProductTable };