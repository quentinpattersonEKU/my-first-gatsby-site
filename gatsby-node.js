const path = require(`path`);

// exports.modifyWebpackConfig = ({ config, stage }) => {
//  config.devServer = {
//      hot: false,
//      inline: false,
//  }
//  return config;
// };



//Create a slug for each recipe and set it as a field on the node.
exports.onCreateNode = ({ node, getNode, actions }) => {
    // console.log(node);
    const { createNodeField } = actions 
    const slug = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
    
    if(node.inte)
    createNodeField({
        node,
        name: `slug`,
        value: slug,
    })
}

// Implement the Gatsby API "createPages". This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = ({ actions, graphql }) => {
    const { createPage } = actions
    return new Promise((resolve, reject) => {
        // const articleTemplate = path.resolve('src/templates/node/article/index.js')
        const pageTemplate = path.resolve(`src/pages/recipe.js`)

        const pageTemplate2 = path.resolve(`src/pages/articles.js`)
        // page building queries
        // field_ragozin_sheet throws graphql errors
        resolve(
            graphql(
                `
query MyQuery 
{
    Drupal 
    {
        nodeRecipes(first: 10) 
        {
            edges 
            {
                node 
                {
                    changed
                    cookingTime
                    difficulty
                    created
                    id
                    ingredients
                    numberOfServings
                    path
                    preparationTime
                    promote
                    status
                    sticky
                    title
                    recipeInstruction 
                    {
                        processed
                        value
                    }
                    summary 
                    {
                        value
                    }
                    mediaImage 
                    {
                        mediaImage 
                        {
                            height
                            url
                            width
                        }
                        id
                    
                    }
                }
            
            }
                
        }
        nodeArticles(first: 10) 
        {
            nodes 
            {
                title
                sticky
                status
                promote
                path
                id
                created
                changed
                mediaImage {
                  mediaImage {
                    url
                  }
                  id
                }
                author {
                  displayName
                  status
                  changed
                  created
                  id
                  mail
                  roles
                }
                body {
                  value
                  format
                  processed
                  summary
                }
            }
        }
    }
}
`
            ).then(result => {
                // shows during build/dev
                // console.log("RESULT");
                // console.log(result);
                if (result.errors) {
                    reject(result.errors)
                }
                console.log("PAGES");
                console.log(result.data.Drupal.nodeRecipes);
                const pages = result.data.Drupal.nodeRecipes.edges;
                const pages2 = result.data.Drupal.nodeArticles.nodes;

                //result.data.allNodeHorse.edges.forEach(({ node }, index) => {
                pages.forEach(({ node }, index) => {
                    // console.log(node);
                    console.log("PATH: ");
                    console.log(node.path);
                    // const page_path = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
                    const page_path = node.path
                    console.log(page_path);
                    console.log(node);
		                actions.createPage({
                        path: `${page_path}`,
                        component: pageTemplate,
                        context: {
                            nid: node.id,
                            data: node,
                        },
                    })
                })
                //result.data.allNodeHorse.edges.forEach(({ node }, index) => {
                pages2.forEach((articleNode) => {
                    // const page_path = (node.path && node.path.alias) ? node.path.alias : '/node/' + node.drupal_id;
                    const page_path2 = `${articleNode.path}`
                    console.log(page_path2);
                    console.log(articleNode);
                        actions.createPage({
                        path: page_path2,
                        component: pageTemplate2,
                        context: {
                            nid: articleNode.id,
                            data: articleNode,
                        },
                    });
                });
            })
        )
    });
}