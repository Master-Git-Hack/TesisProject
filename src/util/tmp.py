from tempfile import NamedTemporaryFile
from typing import Optional

from ..config import Paths


def name(
    suffix: Optional[str] = "",
    prefix: Optional[str] = "",
    extension: Optional[str] = "",
    path: Optional[str] = Paths.tmp,
):
    """
    Generate a temporary filename.
    :param suffix: Suffix.
    :param prefix: Prefix.
    :param extension: Extension ['pdf','html',...etc].
    :param path: root path.
    :return: Filename.
    
    example: tmpFilename(suffix="_tmp", extension="pdf")
    return: "example_tmp.pdf"\n
   
    """
    with NamedTemporaryFile(suffix=suffix,prefix=prefix,dir=path, delete=True) as temp:
        return f"{temp.name}.{extension}"
    #
