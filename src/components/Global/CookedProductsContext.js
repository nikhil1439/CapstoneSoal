import React, { createContext } from 'react'
import { db } from '../firebase'

export const CookedProductsContext = createContext();

export class CookedProductsContextProvider extends React.Component {

    state = {
        products: []
    }

    componentDidMount() {

        const prevProducts = this.state.products;
        db.collection('CookedProducts').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') {
                    prevProducts.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductPrice: change.doc.data().ProductPrice,
                        ProductImg: change.doc.data().ProductImg,
                        ProductDesc: change.doc.data().ProductDesc

                    })
                }
                this.setState({
                    products: prevProducts
                })
            })
        })

    }
    render() {
        return (
            <CookedProductsContext.Provider value={{ products: [...this.state.products] }}>
                {this.props.children}
            </CookedProductsContext.Provider>
        )
    }
}