// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import work from "./work";
import about from "./about";
import skills from "./skills";
import contact from "./contact";
import education from "./education";
import educationExperience from "./educationExperience";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    work,
    about,
    skills,
    educationExperience,
    education,
    contact,
  ]),
});