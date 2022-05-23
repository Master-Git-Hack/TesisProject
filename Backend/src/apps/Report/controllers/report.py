from json2html import *

from src.config import rootPath


def to_html(data) -> bool:
    try:
        with open(f"{rootPath}/tmp/report.html", "w", encoding="utf8") as file:
            file.write(
                json2html.convert(
                    json=data,
                    table_attributes='class="table table-bordered table-hover"',
                )
            )
        return True
    except Exception as e:
        print(e)
        return False
