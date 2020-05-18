---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/
url: setting-up-lsio-wireguard

title: "Setting up linuxserver/wireguard"
subtitle: "Putting your docker stack behind a VPN."
summary: >-
  Post-Net-Neutrality, VPNs are a great thing (they were before,  too). Using
  a VPN, though, is a bit a paint when it comes to Docker as most VPNs expect
  to take over a network interface and have GUI apps associated with them.
  Let's see how to pipe your Docker traffic through Wireguard using Docker.

authors: [ionlights]

tags: []
categories: []

date: 2020-04-30T08:47:28Z
lastmod: 2020-04-30T08:47:28Z

featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: [homelab, ]
---

{{< alert info >}}
First, I'd like to give a shout to LinuxServer.io for the great work they
do in making/maintaining ready-made Docker containers for all kinds of
open-/closed-source apps to get a homelab up-and-running.
{{< /alert >}}

## Starting out
To avoid repeating beating LinuxServer's README into your skull, [here's a
link][lsio/wg]. Definitely give this a thorough read, as it's highly
informative and built in a "copy-pasta" mindset. **We'll be making
modifications, though, so come back once you've copied the `docker run` or
`docker-compose` directives!**

<center>

[`linuxserver/wireguard` README on Docker Hub][lsio/wg]

</center>

[lsio/wg]: https://hub.docker.com/r/linuxserver/wireguard

{{< alert primary >}}
I recommend using `docker-compose` as it's the most verbose and straightforward
way to document and launch your setup.
{{< /alert >}}

Once you've copied their `docker-compose` configuration - make the following
changes:

**Extending the LinuxServer Docker Compose**
```yaml
version: "3"
services:
  wireguard:
    image: linuxserver/wireguard
    container_name: wireguard
    # the rest of your wireguard configuration
    restart: unless-stopped
  nextcloud:  # just some other service
    # your nextcloud configuration
    network_mode: "service:wireguard"
    depends_on: [ "wireguard", ]
```

- [ ] Ensure that you're using `docker-compose` 3.8+; you can guarantee this
      by just putting: `version: "3"` in your `docker-compose.yml`.
- [ ] On the remaining configurations add two lines:
      1. `network_mode: "service:wireguard"` – This was added in
         `docker-compose=3.8` and directs traffic to the service's container.
      3. `depends_on: [ "wireguard", ]` – This guarantees that the container
         won't start until `wireguard` has.

Now that your `docker-compose` is pushing traffic through your wireguard
container, you need to setup a VPN. There are a host of options out there with
**`wireguard` support**, e.g.
1. [MullvadVPN](https://mullvad.net/)
1. [Algo, by Trail of Bits](https://github.com/trailofbits/algo) 
1. Other more common VPNs, like NordVPN, PrivateInternetAccess, Tunnelbear, etc.

{{< alert warning >}}
**NOTE:** Your VPN of choice _must have wireguard support_. Both Mullvad and
Algo (at time of writing) have out-of-the-box support for `wireguard` with 
the others working on it.
{{< /alert >}}

---

## Modifying your reverse proxy's routing (if you use that)

Making use of some more of LinuxServer's pre-builts, let's take a look at the
reverse proxy server &ndash; what you might use to remotely access your
homelab. If you pull-up the `nextcloud.subdomain.conf.sample` (pasted below):

```nginx
# make sure that your dns has a cname set for nextcloud
# assuming this container is called "letsencrypt", edit your nextcloud container's config
# located at /config/www/nextcloud/config/config.php and add the following lines before the ");":
#  'trusted_proxies' => ['letsencrypt'],
#  'overwrite.cli.url' => 'https://nextcloud.your-domain.com/',
#  'overwritehost' => 'nextcloud.your-domain.com',
#  'overwriteprotocol' => 'https',
#
# Also don't forget to add your domain name to the trusted domains array. It should look somewhat like this:
#  array (
#    0 => '192.168.0.1:444', # This line may look different on your setup, don't modify it.
#    1 => 'nextcloud.your-domain.com',
#  ),

server {
    listen 443 ssl;
    listen [::]:443 ssl;

    server_name nextcloud.*;

    include /config/nginx/ssl.conf;

    client_max_body_size 0;

    location / {
        include /config/nginx/proxy.conf;
        resolver 127.0.0.11 valid=30s;
        set $upstream_app nextcloud;
        set $upstream_port 443;
        set $upstream_proto https;
        proxy_pass $upstream_proto://$upstream_app:$upstream_port;

        proxy_max_temp_file_size 2048m;
    }
}
```

Where you see `set $upstream_app nextcloud;` &ndash; replace `nextcloud` with
`wireguard`  and now you'll be good to access your Nextcloud server remotely,
while also having all it's traffic pushed through your VPN of choice.

---

<center>

**Thanks for reading along and I hope this helped you setup your hosted media
and files! :smiley:**

</center>