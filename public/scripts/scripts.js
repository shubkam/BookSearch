function findBook(){

    var user_input = document.getElementById("txtSearch").value;  

    // removing the old search results
    var bookResult = document.querySelector('.container');  
    while(bookResult.childNodes.length > 2)
        var nodeRef = bookResult.removeChild(bookResult.lastChild);
    

    $.get("https://www.googleapis.com/books/v1/volumes?q=" + user_input, function(books,status)
    {
        console.log(books);  
        
        for(var i=0; i<books.items.length;i++)
        {
            var current_book = books.items[i];

            var wrapperDiv = document.createElement("div");
            wrapperDiv. className = "row";
            
            var div_image = document.createElement('div');
            div_image.className = "col-md-3";
            var image = document.createElement('img');
            image.className = "mr-3 img-responsive";
            image.src = current_book.volumeInfo.imageLinks.thumbnail;
            div_image.appendChild(image);
            
            

            // creating div 
            var div = document.createElement('div');
            div.className = "col-md-5";
            

            // displaying title
            var header = document.createElement('h5');
            header.className = "mt-0";
            header.innerHTML = "<br>" + current_book.volumeInfo.title + "</br>";

            // displaying author
            var h6_author = document.createElement("h6");
            var authorsArray = current_book.volumeInfo.authors;

            if (authorsArray != undefined)
                for(var j=0; j < authorsArray.length; j++)
                {
                    var author = authorsArray[j];
                    if( author!= undefined)
                        {
                            h6_author.innerHTML+= author;
                            if(j < authorsArray.length - 1)
                                h6_author.innerHTML += ", ";
                        }
                    }

            // displaying country
            var p_country = document.createElement("p");
            p_country.innerHTML = "<b>Country:</b> " + current_book.accessInfo.country;

            // displaying description
            var p_description =  document.createElement('p');
            var description = current_book.volumeInfo.description;
            if(description != undefined)
                p_description.innerHTML = description;

            // displaying page count
            var p_page_count = document.createElement('p');
            var page_count = current_book.volumeInfo.pageCount;
            if(page_count != undefined)
                p_page_count.innerHTML = "<b>Pages:</b> " + page_count;

            // displaying publication information
            var p_publishedDate = document.createElement('p');
            var p_publisher = document.createElement('p');

            var publisher = current_book.volumeInfo.publisher;
            var publishedDate = current_book.volumeInfo.publishedDate;
            if(publisher != undefined)
                p_publisher.innerHTML = "<b>Published by: </b>" + publisher;
            if(publishedDate != undefined)                
                p_publishedDate.innerHTML = "<b>Publication Date: </b>" + publishedDate;
            
                    
                    
           
            var previewLink = document.createElement('a');
            previewLink.innerHTML = "View more";
            previewLink.href = current_book.volumeInfo.previewLink;

            var hr = document.createElement('hr');

            
            bookResult.appendChild(wrapperDiv);            
            wrapperDiv.appendChild(div_image);
            wrapperDiv.appendChild(div);
            div.appendChild(header);
            div.appendChild(h6_author);
            div.appendChild(p_country);
            div.appendChild(p_publisher);
            div.appendChild(p_publishedDate);
            div.appendChild(p_page_count);
            div.appendChild(p_description);  
            div.appendChild(previewLink);
            bookResult.appendChild(hr);

            
            
        }
     
        
    });      
    
}