from flask_restx import fields


class DictItem(fields.Raw):
    """
    This class is used to generate a json structure for documentation.
    """

    def output(self, key, obj, *args, **kwargs):
        try:
            dct = getattr(obj, self.attribute)
        except AttributeError:
            return {}
        return dct or {}
