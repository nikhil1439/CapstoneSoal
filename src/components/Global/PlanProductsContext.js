import React, { createContext } from 'react'
import { db } from '../firebase'

export const PlanProductsContext = createContext();

export class PlanProductsContextProvider extends React.Component {

    state = {
        products: [],
        type:"",
        recipie:0,
        filterProducts:[]
    }
    
    getFilterProducts =()=>{

        if(this.state.type!== "meat")
        {
        const{products,type} = this.state;
        const filterProducts = products.filter(product=>product.ProductTYPE=== type);
        this.setState({filterProducts})
        }
        else{
            const{products} = this.state;
            const filterProducts = products;
            this.setState({filterProducts})
        }
    }
    setType = (type)=>{
        this.setState({type}, this.getFilterProducts)
      }

      setRecipie = (recipie)=>{
        this.setState({recipie},this.getFilterProducts)
      }
      
      componentDidMount() {
         
        const products = [];
        //const price =250;
        db.collection('PlanProducts').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                if (change.type === 'added') //&& change.doc.data().ProductTYPE===this.state.type) 
                 {
                    products.push({
                        ProductID: change.doc.id,
                        ProductName: change.doc.data().ProductName,
                        ProductTYPE: change.doc.data().ProductTYPE,
                        ProductImg: change.doc.data().ProductImg,
                        ProductDesc: change.doc.data().ProductDesc,
                        ProductIngred: change.doc.data().ProductIngred,
                        ProductPrice: change.doc.data().ProductPrice

                    })
                    console.log(this.state.type)
                }
                this.setState({
                    products,
                    filterProducts: this.state.type
                })
            })
        })

    
}
    
    render() {

        console.log(this.state)
        return (

            <PlanProductsContext.Provider value={{ products: [...this.state.filterProducts], setType: this.setType, setRecipie:this.setRecipie, recipie:this.state.recipie, type:this.state.type }}>
                {this.props.children}
            </PlanProductsContext.Provider>
        )
    }
}