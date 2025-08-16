-- Crear buckets para archivos
insert into storage.buckets (id, name, public) values ('avatares', 'avatares', true);
insert into storage.buckets (id, name, public) values ('portfolio', 'portfolio', true);

-- Política para permitir leer avatares públicamente
create policy "Avatares accesibles públicamente"
on storage.objects for select
using ( bucket_id = 'avatares' );

-- Política para permitir a los usuarios subir sus propios avatares
create policy "Los usuarios pueden subir sus propios avatares"
on storage.objects for insert
with check (
  bucket_id = 'avatares' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Política para permitir a los usuarios actualizar sus propios avatares
create policy "Los usuarios pueden actualizar sus propios avatares"
on storage.objects for update
using (
  bucket_id = 'avatares' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Política para permitir a los usuarios eliminar sus propios avatares
create policy "Los usuarios pueden eliminar sus propios avatares"
on storage.objects for delete
using (
  bucket_id = 'avatares' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Política para permitir leer imágenes de portfolio públicamente
create policy "Imágenes de portfolio accesibles públicamente"
on storage.objects for select
using ( bucket_id = 'portfolio' );

-- Política para permitir a los usuarios subir sus propias imágenes de portfolio
create policy "Los usuarios pueden subir sus propias imágenes de portfolio"
on storage.objects for insert
with check (
  bucket_id = 'portfolio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Política para permitir a los usuarios actualizar sus propias imágenes de portfolio
create policy "Los usuarios pueden actualizar sus propias imágenes de portfolio"
on storage.objects for update
using (
  bucket_id = 'portfolio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);

-- Política para permitir a los usuarios eliminar sus propias imágenes de portfolio
create policy "Los usuarios pueden eliminar sus propias imágenes de portfolio"
on storage.objects for delete
using (
  bucket_id = 'portfolio' AND
  auth.uid()::text = (storage.foldername(name))[1]
);
