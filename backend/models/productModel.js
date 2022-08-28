const mongoose=require("mongoose");
const productSchema= mongoose.Schema({
    title:{
        type:String,
        required:[true,"Enter product title"]
    },
    description:{
      type:String,
      required:[true,"Enter Product description"]
    },
    attributes:[
        {//for length
            name:{type:String},
            details:[
            {value:{type:Number}}
            ]
        },
        {//for density
            name:{type:String},
            details:[
            {value:{type:Number}},
            ]
        },
        {//for hair color
           name:{type:String},
           details:[
            {value:String},
           ] 
        }
    ],
    shipFrom:[
        {value:{type:String}}
    ],
    price:{
        type:Number
        },
    createdAt:{
        type:Date,
        default:Date.now
        },
    sale:{
        status:{
        type:Boolean,
        default:false
        },
        percent:{
            type:Number,
            default:0
        }
    },
    combinations: [ 
        {
            length:Number,
            density:Number,
            HairColor:String,
            quantity:Number,
            checks:[
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {value:{type:Number},status:{type:Boolean}},
                    {HairColor:{type:String},status:{type:Boolean}},
                    {HairColor:{type:String},status:{type:Boolean}}
                   
                ]
            }
            ],
        // ... more
    quantity:{
        total:{type:Number}
    }

})

module.exports=mongoose.model("Products",productSchema);