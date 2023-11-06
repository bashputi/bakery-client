
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import React from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
    const [open, setOpen] = React.useState(1);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
    return (
        <div className="container mx-auto">
            <Helmet>
                <meta charSet="utf-8" />
                <title>SL Bakery | Blog </title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
          <div className="text-center mt-12 font-bold text-2xl lg:text-5xl">
            Queston & Answer
          </div>
         <div className="mt-20">
         <Accordion open={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)}>What is One way data binding?</AccordionHeader>
            <AccordionBody>
             One-way data binding is a concept commonly used in web-development and user interface frameworks to describe th eflow of data from a scource to a target , typically within the context of a graphical user interface (GUI).
             In one-way data binding, data is transferred in a unidirectional manner, meaning, meaning it flows from the source (such as a data model or variable) to the target (such as a UI element) but not the other way around.
             <br /> <br />
             Here's how one-way data binding works: 
             <br /><br />
             1. <b>Source</b>: The source of the data is typically a data model, a variable or some form of data storage.
             <br />
             2. <b>Target</b>: The target is usally a ul element, like a text fild, label or a componenet in a web page appilication.
             <br />
             3. <b>Data Flow</b>: Data flows from the source to the target. When the data in the source changes, it updates the corresponding target element autometiclly to reflect the new data.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2}>
            <AccordionHeader onClick={() => handleOpen(2)}>
            What is NPM in node.js?
            </AccordionHeader>
            <AccordionBody>
            NPM stands for "Node Package Manager", and it is the default Package manager for Node.js, a populer JavaScript runtime environment. NPM is a common-line tool and an online repository of reusable code Packages and modules for Node.js and front-end JavaScript development. It simplifies the process of installing, managing and sharing libraries, dependencies
            , and tools used in Node.js projects.
            <br /><br />
            Here are some key aspects and functionalities of NPM:
            <br /><br />
            1. <b>Package Management</b>: NPM allows delelopers tp easily install, update and remove Packages in their Node.js Projects. These Packages can be either public packages available in the NPM registry or private packages hosted on other repositories.
            <br />
            2. <b>Dependency Management</b>: NPM autometically manages dependencies for your Node.js projects. When you intall a package, NPM also installs its dependencies, ensuring that your projects has all the necessary components.
            <br />
            3. <b>Version Control</b>:Npm allows you to specify the version of a package you want to use, which helps maintain consistency and stability within your project.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3}>
            <AccordionHeader onClick={() => handleOpen(3)}>
            Different between Mongodb database vs mySQL database.
            </AccordionHeader>
            <AccordionBody>
              MongoDB and MySQL are both popular database management system, but they belong to different categories of databases, and they have distinct characteristics. Here are some key differences between MongoDB and MySQL.
              <br /><br />
              1 <b>Data Model</b>: <br /><br />
              - <b>MongoDB :</b> MongoDB is a NoSQL database, which means it uses a flexible, schema-less data model. Data is stored in JSON-like BSON (Binary JSON) documents.
              Each document can have different fields and the structure of documents can evolve over time without requiring a predefined schema.
              <br /><br />
              - <b>MySQL:</b> MySQL is a relational database management system (RDBMS), wich uses a structured tabular data model. Data is organized into tables with rows and columns and the schema, including data types and relationships, needs to be defined before storing data.
              <br /><br />
              2. <b>Query Language</b>: <br /><br />
              - <b>MongoDB :</b> MongoDB is a NoSQL database, which means it uses a flexible, schema-less data model. Data is stored in JSON-like BSON (Binary JSON) documents.
              Each document can have different fields and the structure of documents can evolve over time without requiring a predefined schema.
              <br /><br />
              - <b>MySQL:</b> MySQL is a relational database management system (RDBMS), wich uses a structured tabular data model. Data is organized into tables with rows and columns and the schema, including data types and relationships, needs to be defined before storing data.
              <br /><br />

            </AccordionBody>
          </Accordion>
         </div>
        </div>
      );
};

export default Blog;