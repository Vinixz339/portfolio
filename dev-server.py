"""Servidor local de desenvolvimento do portfólio.

Igual ao `python -m http.server`, mas envia `Cache-Control: no-store`, então o
navegador sempre carrega a versão atual de HTML, CSS, JS e imagens. Evita ver
uma página antiga guardada em cache depois de alterar os arquivos.

Uso (na pasta do projeto):
    python dev-server.py          # http://localhost:8000
    python dev-server.py 8080     # outra porta

Só para testes locais: o deploy continua sendo o site estático na Vercel.
"""

import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()


def main():
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    root = Path(__file__).resolve().parent
    handler = partial(NoCacheHandler, directory=str(root))
    with ThreadingHTTPServer(("", port), handler) as server:
        print(f"Servindo {root} em http://localhost:{port} (sem cache) — Ctrl+C para parar")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nServidor parado.")


if __name__ == "__main__":
    main()
