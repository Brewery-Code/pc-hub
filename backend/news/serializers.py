from rest_framework import serializers
from .models import News
import markdown


class NewsSerializer(serializers.ModelSerializer):
    content_html = serializers.SerializerMethodField()

    class Meta:
        model = News
        fields = ["id", "title", "content", "content_html", "slug", "publish", "image"]

    def get_content_html(self, obj):
        return markdown.markdown(obj.content)
