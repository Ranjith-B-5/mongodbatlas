exports = async function(){

  // To see plenty more examples of what you can do with functions see: 
  // https://www.mongodb.com/docs/atlas/app-services/functions/

  // Find the name of the MongoDB service you want to use (see "Linked Data Sources" tab)
  var serviceName = "Project1";

  // Update these to reflect your db/collection
  var dbName = "pjt1";
  var collName = "hello";

  // Get a collection from the context
  var collection = context.services.get(serviceName).db(dbName).collection(collName);

  var findResult;
  try {
        // Find the most recent document based on the timestamp
        const latestDocument = await collection.findOne({}, {
            sort: { timestamp: -1 } // Ensure you have a timestamp field to sort by
        });

        // Return the count value from the latest document
        return latestDocument ? latestDocument.count : null;
    } catch (error) {
        console.error('Error retrieving the latest count:', error);
    }
};

  // To call other named functions:
  // var result = context.functions.execute("function_name", arg1, arg2);
