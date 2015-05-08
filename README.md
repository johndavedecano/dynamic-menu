# dynamic-menu
A dynamic positioning menu with collision detection

```
bower install dynamic-menu --save

```

## Mark Up

```
    <a href="javascript:void(0)" data-target="#my_dynamic_menu" id="menu-link">Hover Here</a>
    <div class="dynamic_menu_items" id="my_dynamic_menu">
        <ul>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
            <li><a href="#">Some Link</a></li>
        </ul>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
    <script type="text/javascript" src="../dist/dynamic_menu.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            $('#menu-link').Dynamic_Menu();
        });
    </script>
```
