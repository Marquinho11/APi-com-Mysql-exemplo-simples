const { raw } = require('body-parser');
const Product = require('../models/Produtos');
const { where } = require('sequelize');
module.exports = class ApiTeste{
    static async home(req, res){
        try{
            const product = await Product.findAll();
            res.status(200).json(product);
        }catch(error){
            res.status(500).json({ message: 'Erro ao buscar produtos' });
        }

    }
    
    static async create(req, res){
        const name = req.body.name;
        const price = req.body.price;
        const quantity = req.body.quantity;
        if(!name){
            res.status(422).json({ message: 'Nome são obrigatórios' });
            return;
        }
        if(!price){
            res.status(422).json({ message: 'Preço são obrigatórios' });
            return;
        }
        await Product.create({
            name,
            price,
            quantity
        })
        res.status(201).json({message: 'Produto cadastrado com sucesso'});
        
       
    }


    static async refresh(req, res){
        try{
            const id = req.body.id;
            const alter = await Product.update(req.body, {where:{id:id}});
            res.status(200).json(alter);
        }catch(error){
            res.status(500).json({ message: 'Erro ao atualizar produto' });
        }
    }


    static async deletando(req, res){
        try{
            const id = req.params.id;
            const deleteProduct = await Product.destroy({where:{id:id}});
            res.status(200).json({ message: 'Produto deletado com sucesso' });
        }catch(error){
            res.status(500).json({ message: 'Erro ao deletar produto' });
        }
    }
}