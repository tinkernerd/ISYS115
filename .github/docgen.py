import os

# Path to the directory containing the chapters
root_dir = '.'

# Generate index.html
with open("index.html", "w") as index_file:
    index_file.write("<!DOCTYPE html>\n<html>\n<head><title>Projects Index</title></head>\n<body>\n")
    index_file.write("<h1>Project Index</h1>\n")
    
    # Loop through chapters
    for chapter in os.listdir(root_dir):
        if os.path.isdir(os.path.join(root_dir, chapter)) and chapter.startswith("Chapter"):
            chapter_number = ''.join(filter(str.isdigit, chapter))
            index_file.write(f"<h2><a href='https://isys115.nicholasstull.com/{chapter}.html'>{chapter}</a></h2>\n")

            # Generate chapter#.html
            with open(f"{chapter}.html", "w") as chapter_file:
                chapter_file.write(f"<!DOCTYPE html>\n<html>\n<head><title>{chapter} Projects</title></head>\n<body>\n")
                chapter_file.write(f"<h1>{chapter} Projects</h1>\n")

                # Loop through projects in the chapter
                for project_folder in os.listdir(os.path.join(root_dir, chapter)):
                    project_path = os.path.join(root_dir, chapter, project_folder)
                    if os.path.isdir(project_path):
                        for project_file in os.listdir(project_path):
                            if project_file.endswith(".html"):
                                project_name = os.path.splitext(project_file)[0]
                                project_url = f"https://isys115.nicholasstull.com/{chapter}/{project_file}"
                                chapter_file.write(f"<a href='{project_url}'>{project_name}.html</a><br>\n")

                chapter_file.write("</body>\n</html>\n")

    index_file.write("</body>\n</html>\n")
