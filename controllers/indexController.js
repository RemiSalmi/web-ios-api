exports.index = (req,res) =>{
    
    let routes = 
    {
    "users" : 
    [{
        "route" : "https://web-ios-api.herokuapp.com/users/",
        "type" : "get",
        "desc" : "Get all users",
        "output" :
        {
            "message" : "Success | Error",
            "data" : 
            [
                {
                    "outputName": "idUser",
                    "outputDesc" : "user's id"
                },
                {
                    "outputName": "pseudo",
                    "outputDesc" : "user's pseudo"
                },
                {
                    "outputName": "password",
                    "outputDesc" : "user's password"
                },
                {
                    "outputName": "role",
                    "outputDesc" : "user's role"
                }
                
            ] 
        }
        

    },

    {
        "route" : "https://web-ios-api.herokuapp.com/users/:idUser",
        "type" : "get",
        "desc" : "Get an user by his id",
        "param" :
        [
         {
             "paramName": "idUser",
             "ParamDesc" : "user's id"
         }   
        ],
        "output" :
        {
            "message" : "Success | Error",
            "data" : 
            [
                {
                    "outputName": "idUser",
                    "outputDesc" : "user's id"
                },
                {
                    "outputName": "pseudo",
                    "outputDesc" : "user's pseudo"
                },
                {
                    "outputName": "password",
                    "outputDesc" : "user's password"
                },
                {
                    "outputName": "role",
                    "outputDesc" : "user's role"
                }
                
            ] 
        }
        
        

    },

    {
        "route" : "https://web-ios-api.herokuapp.com/users",
        "type" : "post",
        "desc" : "Create an user",
        "input" : 
        [
            {
                "inputName": "pseudo",
                "inputDesc" : "user's pseudo"
            },
            {
                "inputName": "password",
                "inputDesc" : "user's password"
            }
        ],
        "output" :
        {
            "message" : "Success | Error"
        }
    },

    {
        "route" : "https://web-ios-api.herokuapp.com/users/login",
        "type" : "post",
        "desc" : "Allow you to get an auth token",
        "input" : 
        [
            {
                "inputName": "pseudo",
                "inputDesc" : "user's pseudo"
            },
            {
                "inputName": "password",
                "inputDesc" : "user's password"
            }
        ],
        "output" :
        {
            "message" : "Success | Error",
            "data" : 
            [
                {
                    "outputName" : "token",
                    "outputDesc" : "your auth token"
                }
            ]
        }
    },

    {
        "route" : "https://web-ios-api.herokuapp.com/users/:idUser",
        "type" : "put",
        "desc" : "Update an user by his id",
        "param" :
        [
         {
             "paramName": "idUser",
             "ParamDesc" : "user's id"
         }   
        ],
        "input" : 
        [
            {
                "inputName": "password",
                "inputDesc" : "user's new password"
            }, 
            {
                "inputName" : "token",
                "inputDesc" : "your auth token"
            }
        ],
        "output" :
        {
            "message" : "Success | Error"
        }
    },

    {
        "route" : "https://web-ios-api.herokuapp.com/users/:idUser",
        "type" : "delete",
        "desc" : "Delete an user by his id",
        "param" :
        [
         {
             "paramName": "idUser",
             "ParamDesc" : "user's id"
         }   
        ],
        "input" : 
        [
            {
                "inputName" : "token",
                "inputDesc" : "your auth token"
            }
        ],
        "output" :
        {
            "message" : "Success | Error"
        }
    }

    ],
    "categories" : 
    [
        {
            "route" : "https://web-ios-api.herokuapp.com/categories",
            "type" : "get",
            "desc" : "Get all categories",
            
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Category's id"
                    },
                    {
                        "outputName" : "lib",
                        "outputDesc" : "Category's name"
                    },
                    {
                        "outputName" : "type",
                        "outputDesc" : "Category's type"
                    },
                ]
            }
        },
        {
            "route" : "https://web-ios-api.herokuapp.com/categories/answers",
            "type" : "get",
            "desc" : "Get all answers categories",
            
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Category's id"
                    },
                    {
                        "outputName" : "lib",
                        "outputDesc" : "Category's name"
                    },
                    {
                        "outputName" : "type",
                        "outputDesc" : "answer"
                    },
                ]
            }
        },
        {
            "route" : "https://web-ios-api.herokuapp.com/categories/remarks",
            "type" : "get",
            "desc" : "Get all remarks categories",
            
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Category's id"
                    },
                    {
                        "outputName" : "lib",
                        "outputDesc" : "Category's name"
                    },
                    {
                        "outputName" : "type",
                        "outputDesc" : "remark"
                    },
                ]
            }
        },
        {
            "route" : "https://web-ios-api.herokuapp.com/categories/:idCategory",
            "type" : "get",
            "desc" : "Get a category by his id",
            "param" :
        [
         {
             "paramName": "idCategory",
             "ParamDesc" : "Category's id"
         }   
        ],
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Category's id"
                    },
                    {
                        "outputName" : "lib",
                        "outputDesc" : "Category's name"
                    },
                    {
                        "outputName" : "type",
                        "outputDesc" : "Category's type"
                    },
                ]
            }
        },
    ],
    "remarks": 
    [
        {
            "route" : "https://web-ios-api.herokuapp.com/remarks",
            "type" : "get",
            "desc" : "Get all remarks",
            
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idRemark",
                        "outputDesc" : "Remark's id"
                    },
                    {
                        "outputName" : "remark",
                        "outputDesc" : "The remark"
                    },
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Remark's category"
                    },
                    {
                        "outputName" : "idUser",
                        "outputDesc" : "Remark's creator"
                    }
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idRemark",
            "type" : "get",
            "desc" : "Get a remark by his id",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             }   
            ],
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idRemark",
                        "outputDesc" : "Remark's id"
                    },
                    {
                        "outputName" : "remark",
                        "outputDesc" : "The remark"
                    },
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Remark's category"
                    },
                    {
                        "outputName" : "idUser",
                        "outputDesc" : "Remark's creator"
                    }
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/remarks/:idRemark/answers",
            "type" : "get",
            "desc" : "Get all remark's answers",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             }   
            ],
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idAnswer",
                        "outputDesc" : "Answer's id"
                    },
                    {
                        "outputName" : "answer",
                        "outputDesc" : "The answer"
                    },
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Answer's category"
                    },
                    {
                        "outputName" : "idUser",
                        "outputDesc" : "Answer's creator"
                    }
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/remarks/users/:idUser",
            "type" : "get",
            "desc" : "Get all remarks by User",
            "param" :
            [
             {
                 "paramName": "idUser",
                 "ParamDesc" : "User's id"
             }   
            ],
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idRemark",
                        "outputDesc" : "Remark's id"
                    },
                    {
                        "outputName" : "remark",
                        "outputDesc" : "The remark"
                    },
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Remark's category"
                    },
                    {
                        "outputName" : "idUser",
                        "outputDesc" : "Remark's creator"
                    }
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/remarks/:idRemark/encounter",
            "type" : "get",
            "desc" : "Get the number of encounter by remark",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             }   
            ],
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "count",
                        "outputDesc" : "The number of encounter"
                    },
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/remarks",
            "type" : "post",
            "desc" : "Create a remark",
            "input" : 
            [
                {
                    "inputName" : "remark",
                    "inputDesc" : "The remark"
                },
                {
                    "inputName" : "idCategory",
                    "inputDesc" : "Remark's category"
                },
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            
            "output" :
            {
                "message" : "Success | Error",
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/remarks/:idRemark/answers/:idAnswer",
            "type" : "post",
            "desc" : "Add an existing answer to a remark",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             },
             {
                "paramName": "idAnswer",
                "ParamDesc" : "Answer's id"
            }   
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            "output" :
            {
                "message" : "Success | Error",
                
            }
        },
        {
            "route" : "https://web-ios-api.herokuapp.com/remarks/:idRemark/encouter",
            "type" : "post",
            "desc" : "Encounter a remark",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             }
              
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            "output" :
            {
                "message" : "Success | Error",
                
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idRemark",
            "type" : "put",
            "desc" : "Update a Remark",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             }   
            ],
            "input" : 
            [
                {
                    "inputName" : "remark",
                    "inputDesc" : "The Remark"
                },
                {
                    "inputName" : "idCategory",
                    "inputDesc" : "Remark's category"
                },
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            
            "output" :
            {
                "message" : "Success | Error",
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idRemark",
            "type" : "delete",
            "desc" : "delete a remark",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             }   
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            "output" :
            {
                "message" : "Success | Error",
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/remarks/:idRemark/answers/:idAnswer",
            "type" : "delete",
            "desc" : "Remove an answer to a remark",
            "param" :
            [
                {
                    "paramName": "idRemark",
                    "ParamDesc" : "Remark's id"
                },
                {
                    "paramName": "idAnswer",
                    "ParamDesc" : "Answer's id"
                }
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            "output" :
            {
                "message" : "Success | Error",
                
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/remarks/:idRemark/encouter",
            "type" : "delete",
            "desc" : "Unencounter a remark",
            "param" :
            [
             {
                 "paramName": "idRemark",
                 "ParamDesc" : "Remark's id"
             }
              
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            "output" :
            {
                "message" : "Success | Error",
                
            }
        }
    ] ,
    "answers": 
    [
        {
            "route" : "https://web-ios-api.herokuapp.com/answers",
            "type" : "get",
            "desc" : "Get all answers",
            
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idAnswer",
                        "outputDesc" : "Answer's id"
                    },
                    {
                        "outputName" : "answer",
                        "outputDesc" : "The answer"
                    },
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Answer's category"
                    },
                    {
                        "outputName" : "idUser",
                        "outputDesc" : "Answer's creator"
                    }
                ]
            }
        },
        
        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer",
            "type" : "get",
            "desc" : "Get an answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "idAnswer",
                        "outputDesc" : "Answer's id"
                    },
                    {
                        "outputName" : "answer",
                        "outputDesc" : "The answer"
                    },
                    {
                        "outputName" : "idCategory",
                        "outputDesc" : "Answer's category"
                    },
                    {
                        "outputName" : "idUser",
                        "outputDesc" : "Answer's creator"
                    }
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer/likes",
            "type" : "get",
            "desc" : "Get the number of like of an answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                },
                
            ],
            "output" :
            {
                "message" : "Success | Error",
                "data" : 
                [
                    {
                        "outputName" : "count",
                        "outputDesc" : "The number of like"
                    },
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer/comments",
            "type" : "get",
            "desc" : "Get all comments for an answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            
            "output" :
            {
                "message" : "Success | Error",
                "data" :
                [
                    {
                        "outputName" : "idAnswer",
                        "outputDesc" : "Answer's id"
                    },
                    {
                        "outputName" : "idComment",
                        "outputDesc" : "Comment's id"
                    },
                    {
                        "outputName" : "idUser",
                        "outputDesc" : "comment's creator"
                    },
                    {
                        "outputName" : "comment",
                        "outputDesc" : "The comment"
                    },
                    {
                        "outputName" : "dateCreation",
                        "outputDesc" : "Comment's creation date"
                    },
                ]
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers",
            "type" : "post",
            "desc" : "Create an answer",
            "input" : 
            [
                {
                    "inputName" : "answer",
                    "inputDesc" : "The answer"
                },
                {
                    "inputName" : "idCategory",
                    "inputDesc" : "Answer's category"
                },
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            
            "output" :
            {
                "message" : "Success | Error",
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer/likes",
            "type" : "post",
            "desc" : "Add a like to the answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                },
                
            ],
            "output" :
            {
                "message" : "Success | Error"
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer/comments",
            "type" : "post",
            "desc" : "Add a comment to the answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            "input" : 
            [
                
                {
                    "inputName" : "comment",
                    "inputDesc" : "The new comment"
                },
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
                
            ],
            "output" :
            {
                "message" : "Success | Error"
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer",
            "type" : "put",
            "desc" : "Update an answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            "input" : 
            [
                {
                    "inputName" : "answer",
                    "inputDesc" : "The answer"
                },
                {
                    "inputName" : "idCategory",
                    "inputDesc" : "Answer's category"
                },
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            
            "output" :
            {
                "message" : "Success | Error",
            }
        },

        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer",
            "type" : "delete",
            "desc" : "delete an answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                }
            ],
            "output" :
            {
                "message" : "Success | Error",
            }
        },
        
        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer/likes",
            "type" : "delete",
            "desc" : "remove a like to the answer",
            "param" :
            [
             {
                 "paramName": "idAnswer",
                 "ParamDesc" : "Answer's id"
             }   
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                },
                
            ],
            "output" :
            {
                "message" : "Success | Error"
            }
        },
        
        
        {
            "route" : "https://web-ios-api.herokuapp.com/answers/:idAnswer/comments/:idComment",
            "type" : "delete",
            "desc" : "Delete a comment to the answer",
            "param" :
            [
             {
                "paramName": "idAnswer",
                "ParamDesc" : "Answer's id"
             },
             {
                "paramName": "idComment",
                "ParamDesc" : "Comment's id"
            }      
            ],
            "input" : 
            [
                {
                    "inputName" : "token",
                    "inputDesc" : "your auth token"
                },
            ],
            "output" :
            {
                "message" : "Success | Error"
            }
        },
    ]

    }

    res.render('index',{routes})


}